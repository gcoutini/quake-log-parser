import { ApiOperationOptions } from '@nestjs/swagger';

export const fileApiOperation: ApiOperationOptions = {
  requestBody: {
    content: {
      'multipart/form-data': {
        schema: {
          type: 'object',
          properties: {
            file: {
              type: 'file',
              format: 'binary',
            },
          },
          required: ['file'],
        },
      },
    },
  },
};
