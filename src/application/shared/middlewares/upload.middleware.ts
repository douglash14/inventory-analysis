import multer from 'multer';

export function uploadMiddleware(multiple: boolean) {
    return () => {
        const upload = multer({ storage: multer.memoryStorage() });

        return upload.single('file');
    }
}