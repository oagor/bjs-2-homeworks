class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error("Отсутствуют обязательные аргументы");
		}

		const sameTimeClocks = this.alarmCollection.filter((clock) => clock.time === time);
		if (sameTimeClocks.length > 0) {
			console.warn("Уже присутствует звонок на это же время");
		}

		this.alarmCollection.push({
			callback,
			time,
			canCall: true
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter((clock) => clock.time !== time);
	}

	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString("ru-RU", {
			hour: "2-digit",
			minute: "2-digit"
		});
	}

	start() {
		if (this.intervalId) {
			return;
		}

		this.intervalId = setInterval(() => {
			const currentTime = this.getCurrentFormattedTime();
			this.alarmCollection.forEach((clock) => {
				if (clock.time === currentTime && clock.canCall === true) {
					clock.canCall = false;
					clock.callback();
				}
			});
		}, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach((clock) => {
			clock.canCall = true;
		});
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}