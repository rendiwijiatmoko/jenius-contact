import { fp, wp } from "../utils/responsive"

const CStyles = {
    fontSize: {
        semiSmall: fp(1.5),
        small: fp(2),
        extraSmall: fp(2.2),
        semiMedium: fp(2.5),
        medium: fp(3),
        extraMedium: fp(3.2),
        semiLarge: fp(3.5),
        large: fp(4),
        extraLarge: fp(4.2)
    },
    margin: {
        horizontal: wp(3),
        horizontal2: wp(4),
        horizontal3: wp(5),
    }
}

export { CStyles }