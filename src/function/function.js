export default class jsFunction {
  static async showmodal(id) {
    let element = document.getElementById(id);
    element.style.display = "block";
  }
  static async hidemodal(id) {
    let element = document.getElementById(id);
    element.style.display = "none";
  }
  static async showdropdown(id) {
    let element = document.getElementById(id);
    if (element.style.display == "block") {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  }
}
