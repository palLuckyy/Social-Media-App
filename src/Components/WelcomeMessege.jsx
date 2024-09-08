const WelcomeMessege = ({ onGetPostClick }) => {
  return (
    <center className="Wlcome-messege">
      <h1>There is no post</h1>
      <button type="button"
      onClick={onGetPostClick}
       className="btn btn-primary">
        Get Posts From Server
      </button>
    </center>
  );
};
export default WelcomeMessege;
