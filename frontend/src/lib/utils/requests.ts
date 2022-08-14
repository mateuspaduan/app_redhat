const serverUrl = "http://127.0.0.1:4000"

async function doPost(payload: Object, endpoint: String) {
    console.log(`Doing a post to ${serverUrl}${endpoint}`)
    const res = await fetch(`${serverUrl}${endpoint}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    const json = await res.json();
    const result = JSON.stringify(json);
    console.log("Request completed, status:" + res.status)

    return { status: res.status, json: result }
}

export {doPost}