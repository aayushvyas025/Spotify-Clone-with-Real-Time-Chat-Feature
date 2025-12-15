import mongoose from "mongoose";
import Constants from "../../constants/constants.js";

const { apiResponseMessages } = Constants;
const { allFieldsRequired, notSuccess, requiredUploadFiles, idNotValid } =
  apiResponseMessages;

const validationChecking = {
  idValidation: (givenId) => {
    if (!mongoose.Types.ObjectId.isValid(givenId)) {
      const errorResponse = { success: notSuccess, message: idNotValid };
      return errorResponse;
    }
    return { success: true };
  },
  uploadSingleValidation: (uploadFiles) => {
    if (!uploadFiles) {
      const errorResponse = {
        success: notSuccess,
        message: requiredUploadFiles,
      };
      return errorResponse;
    }

    return { success: true };
  },
  albumValidations: (album) => {
    if (!album.title || !album.artist || !album.releaseYear) {
      const errorResponse = { success: notSuccess, message: allFieldsRequired };
      return errorResponse;
    }

    return { success: true };
  },
  authValidation: (authFields) => {
    if (
      !authFields?.id ||
      !authFields?.firstName ||
      !authFields?.lastName ||
      !authFields?.imageUrl
    ) {
      return false;
    }

    return true;
  },
  adminValidation: {
    inputValidation: (inputValues) => {
      if (
        !inputValues?.title ||
        !inputValues?.artist ||
        !inputValues?.duration ||
        !inputValues?.albumId
      ) {
        const errorResponse = {
          success: notSuccess,
          message: allFieldsRequired,
        };
        return errorResponse;
      }

      return { success: true };
    },
    uploadFilesValidation: (uploadFiles) => {
      if (
        !uploadFiles.files ||
        !uploadFiles?.files?.audioFile ||
        !uploadFiles?.files?.imageFile
      ) {
        const errorResponse = {
          success: notSuccess,
          message: requiredUploadFiles,
        };
        return errorResponse;
      }
      return { success: true };
    },
  },
};

export default validationChecking;
