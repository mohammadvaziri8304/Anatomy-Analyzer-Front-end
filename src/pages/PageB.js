import UploadFormB from "../components/UploadFormB";

const image_url1 = "https://anatomy-production-6b64.up.railway.app/upload-analyze-auto";
const image_url2 = "https://anatomymain4-production.up.railway.app/upload-analyze-auto8";

function PageB() {
  return (
    <div>
      <div>
        <h2>اندازه گیری زاویه سر و گردن، کیفوز و لوردوز</h2>
        <UploadFormB image_url={image_url1} />
      </div>
      <div>
        <h2>تشخیص اسکولیوز</h2>
        <UploadFormB image_url={image_url2} />
      </div>
    </div>
  );
}

export default PageB;