import json
import boto3
import time
import os

s3 = boto3.client('s3')
bucket_name = os.environ['JOB_DATA_BUCKET']

def lambda_handler(event, context):
    try:
        print("Incoming event:", event)

        body = json.loads(event['body'])
        title = body.get('title')
        location = body.get('location')
        description = body.get('description')

        if not title or not location or not description:
            print("Missing field in job data.")
            return {
                'statusCode': 400,
                'body': json.dumps({'message': 'Missing required fields'})
            }

        job_data = {
            'title': title,
            'location': location,
            'description': description
        }

        filename = f"{int(time.time() * 1000)}.json"
        print(f"Saving to S3 bucket: {bucket_name}, filename: {filename}")
        s3.put_object(Bucket=bucket_name, Key=filename, Body=json.dumps(job_data))
        print("Successfully saved job")

        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'message': 'Job posted successfully'})
        }

    except Exception as e:
        print("Error while posting job:", str(e))
        return {
            'statusCode': 500,
            'body': json.dumps({'message': 'Internal server error'})
        }
