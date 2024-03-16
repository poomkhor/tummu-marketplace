import sendRequest from './send-request';
const BASE_URL = '/api/products';

export async function getAll() {
    return sendRequest(BASE_URL);
}

// This function is never actually used in SEI CAFE,
// it's only provided here to remind you to follow
// RESTful routing, etc.
export async function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export async function create(productData) {
    return sendRequest(BASE_URL, 'POST', productData);
}

export async function update(productData) {
    return sendRequest(`${BASE_URL}/${productData._id}`, 'PUT', productData);
}

export async function deleteOne(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}