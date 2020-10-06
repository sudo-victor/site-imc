import { Container, Grid, Typography } from "@material-ui/core"

import styles from "./header.module.scss"

function Header() {
    return (
        <div className={styles.header}>
            <Container fixed>
                <Grid container justify="center" alignItems="center" spacing={5}>
                    <Grid item xs={12} sm={6}>
                        <Typography className={styles.header__title} variant="h3">Calcule o seu IMC</Typography>
                        <Typography>O IMC é o Índice de Massa Corporal, e é ultilizado para saber se o peso está de acordo com a altura.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src="/medic.png" alt="Médico e paciente" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Header