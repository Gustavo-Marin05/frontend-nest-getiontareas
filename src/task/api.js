import axios  from "../instance.js";




export const getTasks =()=> axios.get('/task');

export const deleteTask = (id)  => axios.delete(`/task/${id}`)

export const createTask = (task) => axios.post('/task', task);

export const getTaskById = (id) => axios.get(`/task/${id}`);
export const updateTask = (id, task) => axios.put(`/task/${id}`, task);