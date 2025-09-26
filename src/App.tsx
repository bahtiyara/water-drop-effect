import { useState } from "react"
import st from "./App.module.scss"

const EConnection = {
	DISCONNECTED: "disconnected",
	CONNECTING: "connecting",
	CONNECTED: "connected",
} as const

export function App() {
	const [connection, _setConnection] = useState(EConnection.CONNECTING)

	return (
		<div className={st.container}>
			<svg
				style={{ visibility: "hidden", position: "absolute" }}
				width="0"
				height="0"
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
			>
				<defs>
					<filter
						id="round"
						x="-50%"
						y="-50%"
						width="200%"
						height="200%"
						colorInterpolationFilters="sRGB"
					>
						<feGaussianBlur
							in="SourceGraphic"
							stdDeviation="10"
							result="blur"
						/>
						<feColorMatrix
							in="blur"
							mode="matrix"
							values="1 0 0 0 0
									0 1 0 0 0
									0 0 1 0 0
									0 0 0 19 -9
									"
							result="goo"
						/>
						<feComposite
							in="SourceGraphic"
							in2="goo"
							operator="atop"
						/>
					</filter>
				</defs>
			</svg>
			{Array.from({ length: 2 }).map((_, i) => (
				<div
					key={i}
					className={[
						st.circle,
						st[`circle${i + 1}`],
						st[connection],
					].join(" ")}
				/>
			))}
		</div>
	)
}
