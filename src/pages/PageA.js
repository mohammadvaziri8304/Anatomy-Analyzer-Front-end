import UploadFormA from "../components/UploadFormA";

const image_url1 = "https://anatomy-calculator-api-production.up.railway.app/upload-image";
const points_url1 = "https://anatomy-calculator-api-production.up.railway.app/calculate-angles";
const image_url2 = "https://anatomy-production.up.railway.app/upload-image-8point";
const points_url2 = "https://anatomy-production.up.railway.app/analyze-8-points";

function PageA() {
  return (
    <div>
      <div>
        <h2>اندازه گیری زاویه سر و گردن، کیفوز و لوردوز</h2>
        <UploadFormA image_url={image_url1} points_url={points_url1} num_of_points={10} />
      </div>
      <div>
        <h2>تشخیص اسکولیوز</h2>
        <UploadFormA image_url={image_url2} points_url={points_url2} num_of_points={8} />
      </div>
    </div>
  );
}

export default PageA;