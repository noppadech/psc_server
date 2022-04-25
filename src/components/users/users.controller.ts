import { Application, NextFunction, Request, Response } from 'express';
import { PostgresDataSource } from '../../data-source';
import * as responsehandler from '../../lib/response-handler';
import BaseApi from '../BaseApi';

/**
 * Status controller
 */
export default class UserController extends BaseApi {

    constructor(express: Application) {
        super();
        this.register(express);
        // establish database connection
        PostgresDataSource
        .initialize()
        .then(() => {
            // eslint-disable-next-line no-console
            console.log('Data Source has been initialized!');
        })
        .catch((err) => {
            // eslint-disable-next-line no-console
            console.error('Error during Data Source initialization:', err);
        });
    }

    public register(express: Application): void {
        express.use('/api/users', this.router);
        this.router.get('/get', this.getUser);
        this.router.put('/edit/:id', this.editUser);
        // this.router.get('/error', this.getError);
    }

    public getUser(req: Request, res: Response, next: NextFunction): void {
        try {
            res.locals = res.status(201).json('สวัสดีชาวโลก');
            // res.locals.data = 'สวัสดีชาวโลก';
            responsehandler.send(res);
        } catch (err) {
            next(err);
        }
    }

    public editUser(req: Request, res: Response, next: NextFunction): void {
        try {
            res.locals.data = req.params.id;
            responsehandler.send(res);
            // eslint-disable-next-line no-console
            console.log(req.body);
        } catch (err) {
            next(err);
        }
    }

    public deleteUser(req: Request, res: Response, next: NextFunction): void {
        try {
            res.locals.data = req.params.id;
            responsehandler.send(res);
            // eslint-disable-next-line no-console
            console.log(req.body);
        } catch (err) {
            next(err);
        }
    }
    
}
