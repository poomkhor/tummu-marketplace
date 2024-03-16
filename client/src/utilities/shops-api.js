import sendRequest from './send-request';

const BASE_URL = '/api/shops';

export async function getAll() {
    return sendRequest(BASE_URL);
}

// This function is never actually used in SEI CAFE,
// it's only provided here to remind you to follow
// RESTful routing, etc.
export async function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export async function create(shopData) {
    return sendRequest(BASE_URL, 'POST', shopData);
}

export async function update(shopData) {
    return sendRequest(`${BASE_URL}/${shopData._id}`, 'PUT', shopData);
}

export async function deleteOne(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}
