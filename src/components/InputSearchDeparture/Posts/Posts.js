import React from "react";

const Posts = (props) => {
	return (
		<div>
			{props.posts.length !== 0 && (
				<div className="border rounded mt-3 position-absolute w-100 bg-white">
					{props.posts.length > 0 ? (
						props.posts.map((p) => {
							return (
								<div
									key={p.id}
									className="p-2 border-bottom text-wrap hover-color-sncf"
									onClick={() => props.handleClickPlace(p)}
								>
									{p.name}
								</div>
							);
						})
					) : (
						<div></div>
					)}
				</div>
			)}
		</div>
	);
};

export default Posts;
