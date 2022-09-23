const fs = require('fs');
const path = require('path');
const uploadConfig = require('../configs/uploads');

class DiskStorage {
  async save(file) {
    await fs.promises.rename(//troca de local a imagem
      path.resolve(uploadConfig.TMP_FOLDER, file),
      path.resolve(uploadConfig.UPLOADS_FOLDER, file)
    );

    return file;
  }

  async delete(file) {
    const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file);

    try {
      await fs.promises.stat(filePath);
    } catch {
      return;
    }

    await fs.promises.unlink(filePath);
  }
}

module.exports = { DiskStorage };