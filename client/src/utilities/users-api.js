// interface to the backend
// whatever API paths the backend provides, this module matches them, consumes them

import sendRequest from './send-request';

const BASE_URL = `/api/users`;
// POST /users
export async function createUser(userData) {
    return sendRequest(BASE_URL, 'POST', userData);
}

export async function login(userData) {
    return sendRequest(`${BASE_URL}/login`, 'POST', userData);
}

export async function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`);
}