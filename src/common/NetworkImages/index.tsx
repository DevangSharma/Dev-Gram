import "./NetworkImage.css";
function NetworkImage(props: any) {
  return (
    <div className="nid219NetworkDiv">
      <img className="nii219NetworkImage" src={props.url} alt="Network" />
    </div>
  );
}

export default NetworkImage;
