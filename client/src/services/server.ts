import { Server } from 'stellar-sdk';

const VITE_HORIZON_URL = import.meta.env['VITE_HORIZON_URL'];

const server = new Server(VITE_HORIZON_URL);

export default server