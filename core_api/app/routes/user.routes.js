import express from 'express';
import { showusers } from '../controllers/user.controller';

const router = express.router();
router.get('/users', showusers);