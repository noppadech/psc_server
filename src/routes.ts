import * as express from 'express';
import SystemStatusController from './components/system-status/system-status.controller';
import UserController from './components/users/users.controller';

export default function registerRoutes(app: express.Application): void {
    new SystemStatusController(app);
    new UserController(app);
}
