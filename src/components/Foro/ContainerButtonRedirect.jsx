import ButtonRedirectOtherForo from "./ButtonRedirectOtherForo";

function ContainerButtonRedirect() {
  return (
    <div>
      <ButtonRedirectOtherForo
        title="PS5"
        Redirect={() => {
          console.log("PS5");
        }}
      />
      <ButtonRedirectOtherForo
        title="XBOX"
        Redirect={() => {
          console.log("XBOX");
        }}
      />
      <ButtonRedirectOtherForo
        title="NINTENDO"
        Redirect={() => {
          console.log("NINTENDO");
        }}
      />
      <ButtonRedirectOtherForo
        title="PC"
        Redirect={() => {
          console.log("PC");
        }}
      />
    </div>
  );
}

export default ContainerButtonRedirect;


