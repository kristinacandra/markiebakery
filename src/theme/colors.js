const colors = {
    grey: (opacity = 1) => `rgba(90, 90, 90, ${opacity})`,
    blue: (opacity = 1) => `rgba(53, 88, 225, ${opacity})`,
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    darkModeBlack: (opacity = 1) => `rgba(27, 27, 27, ${opacity})`,
    darkModeBlue: (opacity = 1) => `rgba(146, 156, 241, ${opacity})`,
    pink: (opacity = 1) => `rgba(218, 100, 155, ${opacity})`,
    darkPink: (opacity = 1) => `rgba(255, 0, 119, ${opacity})`,
    brown: (opacity = 1) => `rgba(81, 49, 20, ${opacity})`,
}
export default colors