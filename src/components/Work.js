import bookmanager from "../pictures/bookmanager.png";
import bookshelf from "../pictures/bookshelf.png";
import chatroom from "../pictures/chatroom.png";

const work = {
	bookshelf: {
		EN: "Website to keep track of the readen books.",
		HU: "Weboldal elolvasott könyvek számon tartásához.",
	},
	bookmanager: {
		EN: "Website to manage database about books.",
		HU: "Weboldal könyvekkel foglalkozó adatbázis kezeléséhez.",
	},
	chatroom: {
		EN: "Website where you can talk with other people in real time.",
		HU: "Weboldal amelyen tudnak emberek egymással tudnak beszélni valós időben.",
	}
};

export default function Work({ language }) {
	return (
		<>
			<h2>{language.work}</h2>
			<div className="line"></div>

			{/* BookShelf */}
			<div className="item">
				<h3>BOOKSHELF</h3>
				<img alt={bookshelf} src={bookshelf} />
				<p>{work.bookshelf[language.language]}</p>
				<p>
					GitHub Repository:{" "}
					<a href="https://github.com/richard-nagy/BookShelf">Link</a>
				</p>
				<p>
					{language.website}:{" "}
					<a href="https://richard-nagy.github.io/BookShelf/">Link</a>
				</p>
				<p>
					{language.technologies}:{" "}
					<b>React, SASS, Firebase Realtime Database</b>
				</p>
			</div>

			{/* BookManager */}
			<div className="item">
				<h3>BOOKMANAGER</h3>
				<img alt={bookshelf} src={bookmanager} />
				<p>{work.bookmanager[language.language]}</p>
				<p>
					GitHub Repository:{" "}
					<a href="https://github.com/richard-nagy/BookManager">
						Link
					</a>
				</p>
				<p>
					{language.technologies}: <b>React, Redux, MySQL, Axios</b>
				</p>
			</div>

			{/* Chat Room */}
			<div className="item">
				<h3>CHAT ROOM</h3>
				<img alt={chatroom} src={chatroom} />
				<p>{work.chatroom[language.language]}</p>
				<p>
					GitHub Repository:{" "}
					<a href="https://github.com/richard-nagy/ChatRoom">
						Link
					</a>
				</p>
				<p>
					{language.technologies}: <b>React, Firebase Firestore</b>
				</p>
			</div>
		</>
	);
}
