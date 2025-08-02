import json

def lambda_handler(event, context):
    body = json.loads(event.get('body', '{}'))

    job = {
        "title": body.get("title"),
        "description": body.get("description"),
        "location": body.get("location")
    }

    print("New job received:", job)

    return {
        "statusCode": 200,
        "body": json.dumps({"message": "Job posted successfully!", "job": job}),
        "headers": {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "*"
        }
    }
