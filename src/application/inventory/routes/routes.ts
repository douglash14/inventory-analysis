import express from 'express';
import { InventoryFileController }from '@Application/inventory/controllers/inventory-file.controller';
import { validadateFileExtensionMiddleware } from '@Application/shared/middlewares/validate-file-extension.middleware';
import { uploadMiddleware } from '@Application/shared/middlewares/upload.middleware';
import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() });

const inventoryFileController = new InventoryFileController();

const router = express.Router();

router.post('/analyze-inventory', [upload.single('file'), validadateFileExtensionMiddleware], inventoryFileController.analyzeInventoryFile);

export default router;
