import {Router} from 'express';
import SessionsControllers from '../controllers/SessionsControllers';

const sessionsControllers = new SessionsControllers();

const routerSessions = Router();


routerSessions.post('/', sessionsControllers.create);



export default routerSessions;
