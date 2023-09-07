import React from 'react';
import { Profile } from '../Pages/profile'

async function getErrorMsg(response: response) {
    json = await response.json()
    return json.detail.msg
}

async function getAccessToken(response: response) {
    json = await response.json()
    return json.access_token
}

async function HandleResponse(response: response) {
    if (response.status === 200) {
        const token = await getAccessToken(response)
        return token;
    } else if (response.status === 401) {
        console.log("Invalid Email and Password combination.")
        alert("Invalid Email and Password combination.")
    } else {
        const msg = await getErrorMsg(response)
        console.log(msg)
        alert("Error: " + msg)
    }
    return "Invalid token";
}

export async function Connect(email, password) {
    const response = await fetch('http://masurao.fr/api/employees/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "X-Group-Authorization": "Xqkwp3zjCVdV0fBhfzMASBwnK9DcE4xW"
        },
        body: JSON.stringify({
            "email": email,
            "password": password,
        })
    })
    const res = await HandleResponse(response)
    return res
};