import * as AWS from "aws-sdk";

const accessKeyId = process.env.AWS_KEY;
const secretAccessKey = process.env.AWS_SECRET;
const Bucket = process.env.AWS_BUCKET;

AWS.config.update({
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

export const uploadToS3 = async (file, userId, folderName) => {
  const { filename, createReadStream } = await file;
  console.log({ filename });
  const readStream = createReadStream();
  const objectName = `${folderName}/${userId}-${Date.now()}-${filename}`;
  const { Location } = await new AWS.S3()
    .upload({
      Bucket,
      Key: objectName,
      ACL: "public-read",
      Body: readStream,
    })
    .promise();
  return Location;
};

// Bucket 과 Instance 변수로 설정
// update 코드에도 반영

export const delPhotoS3 = async (fileUrl) => {
  const filePath = fileUrl.split("/uploads/")[1]; // 파일명만 split 후 선택
  const params = {
    Bucket: `${Bucket}/uploads`, // Bucket에 폴더 명 uploads 추가
    Key: filePath,
  };
  await new AWS.S3()
    .deleteObject(params, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    })
    .promise();
};
