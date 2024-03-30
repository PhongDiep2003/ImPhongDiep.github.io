const navigateToSection = (num) => {
  const element = document.getElementById(num)
  if (element) {
    element.scrollIntoView({behavior:'smooth'})
  }
}
export default navigateToSection