
var semesterInfo = {
    // The dates for the first and last day of classes (not including finals week).
    // Set the time to 4 AM ... because why not.
    firstDayOfSemester: new Date("01/27/2025 4:00:00"),
    lastDayOfSemester:  new Date("05/08/2025 4:00:00"),

    // Specify days on which there are no classes held at the college.
    // Each break is specified by a startDate and an endDate.
    // For single-day breaks, the startDate and endDate are the same.
    vacationDates: [
        new VacationDays("Winter Break", new Date("03/06/2025"), new Date("03/07/2025")),
        new VacationDays("Spring Break", new Date("04/18/2025"), new Date("04/21/2025")),
    ]
};
