import React from "react";
import BpkInput, {
	INPUT_TYPES,
} from "@skyscanner/backpack-web/bpk-component-input";
import BpkButton from "@skyscanner/backpack-web/bpk-component-button";
import BpkText from "@skyscanner/backpack-web/bpk-component-text";
import BpkCalendar, {
	CALENDAR_SELECTION_TYPE,
} from "@skyscanner/backpack-web/bpk-component-calendar";
import format from "date-fns/format";

import { cssModules } from "@skyscanner/backpack-web/bpk-react-utils";

import STYLES from "./App.scss";

const getClassName = cssModules(STYLES);

const App = () => {
	const formatDateFull = (date) => format(date, "EEEE, do MMMM yyyy");
	const formatMonth = (date) => format(date, "MMMM yyyy");
	const daysOfWeek = [
		{
			name: "Sunday",
			nameAbbr: "Sun",
			index: 0,
			isWeekend: true,
		},
		{
			name: "Monday",
			nameAbbr: "Mon",
			index: 1,
			isWeekend: false,
		},
		{
			name: "Tuesday",
			nameAbbr: "Tues",
			index: 2,
			isWeekend: false,
		},
		{
			name: "Wednesday",
			nameAbbr: "Wed",
			index: 3,
			isWeekend: false,
		},
		{
			name: "Thursday",
			nameAbbr: "Thur",
			index: 4,
			isWeekend: false,
		},
		{
			name: "Friday",
			nameAbbr: "Fri",
			index: 5,
			isWeekend: false,
		},
		{
			name: "Saturday",
			nameAbbr: "Sat",
			index: 6,
			isWeekend: true,
		},
	];

	const [configuration, setConfiguration] = React.useState({
		type: CALENDAR_SELECTION_TYPE.single,
		date: null,
	});

	const handleDateSelect = (date) => {
		setConfiguration({
			type: configuration.type,
			date: date,
		});
	};

	return (
		<div className={getClassName("App")}>
			<header className={getClassName("App__header")}>
				<div className={getClassName("App__header-inner")}>
					<BpkText
						tagName="h1"
						textStyle="xxl"
						className={getClassName("App__heading")}
					>
						Flight Schedule
					</BpkText>
				</div>
			</header>
			<main className={getClassName("App__main")}>
				<BpkInput
					id="dateInput"
					type={INPUT_TYPES.text}
          onChange={console.log}
					name="date"
					value={(configuration.date || "").toString()}
					placeholder="Departure date"
				/>
				<BpkCalendar
					id="calendar"
					onDateSelect={handleDateSelect}
					formatMonth={formatMonth}
					formatDateFull={formatDateFull}
					daysOfWeek={daysOfWeek}
					className={getClassName("App__calendar")}
					weekStartsOn={1}
					changeMonthLabel="Change month"
					nextMonthLabel="Next month"
					previousMonthLabel="Previous month"
					selectionConfiguration={configuration}
				/>
				<BpkButton
					className={getClassName("App__button")}
					onClick={() => alert("It works!")}
				>
					Continue
				</BpkButton>
			</main>
		</div>
	);
};

export default App;
