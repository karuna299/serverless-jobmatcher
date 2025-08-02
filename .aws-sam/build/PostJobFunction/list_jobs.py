# backend/list_jobs.py

import boto3
import json
import os

s3 = boto3.client("s3")
BUCKET = os.environ["JOB_DATA_BUCKET"]

def lambda_handler(event, context):
    try:
        # List all objects in the bucket
        response = s3.list_objects_v2(Bucket=BUCKET)
        job_list = []

        for obj in response.get("Contents", []):
            key = obj["Key"]
            if key.endswith(".json"):
                file_obj = s3.get_object(Bucket=BUCKET, Key=key)
                file_content = file_obj["Body"].read().decode("utf-8")
                job_data = json.loads(file_content)
                job_list.append(job_data)

        return {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            "body": json.dumps(job_list)
        }

    except Exception as e:
        print(f"Error fetching jobs: {e}")
        return {
            "statusCode": 500,
            "headers": {
                "Access-Control-Allow-Origin": "*"
            },
            "body": json.dumps({"error": str(e)})
        }
