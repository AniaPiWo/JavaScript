//SWITCH

const dayOfWeek = "piątek";

switch (
  dayOfWeek //switch sprawdza czy dayOfWeek jest równy case
) {
  case "poniedziałek":
    console.log("przykro mi, dziś jest poniedziałek!");
    break;
  case "wtorek":
    console.log("dziś jest wtorek!");
    break;
  case "środa":
    console.log("połowa tygodnia! dziś jest środa!");
    break;
  case "czwartek":
    console.log("dziś jest czwartek, czyli taki mały piątek!");
    break;
  case "piątek":
    console.log("dziś jest piątek, piąteczek, piątunio!");
    break;
  case "sobota":
    console.log("dziś jest sobota, dzien mopa!");
    break;
  case "niedziela":
    console.log("dziś jest niedziela! Korzystaj z ostatniego dnia wolnego!");
    break;
  default:
    console.log("nie ma takiego dnia tygodnia!");
}
