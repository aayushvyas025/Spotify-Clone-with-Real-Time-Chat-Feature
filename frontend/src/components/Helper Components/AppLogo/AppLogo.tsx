import grooveBoxLogo from "/groove-box-logo.png";

function AppLogo() {
  return (
    <div className="flex gap-2 items-center">
      <img src={grooveBoxLogo} alt="application-logo" className="size-8" />
      Groove Box
    </div>
  );
}

export default AppLogo;
