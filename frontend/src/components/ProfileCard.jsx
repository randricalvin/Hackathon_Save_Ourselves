function ProfileCard({ firstname, score, inscription, avatar }) {
  return (
    <div className="w-2/5 rounded-xl flex flex-col bg-profilCard justify-around content-center items-center mb-10">
      <img
        className="w-3/5 rounded-full"
        src={avatar}
        alt="menber representation"
      />
      <h2>{firstname}</h2>
      <h3>{score && score[score.length - 1].taken.length}</h3>
      <h3>{inscription}</h3>
    </div>
  );
}
export default ProfileCard;
