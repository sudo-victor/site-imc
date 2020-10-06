import { useState } from "react"
import { Container, Grid, Typography, TextField, Button } from "@material-ui/core"

import styles from "./calculator.module.scss"

function Calculator() {
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [imc, setImc] = useState()

    const calculateIMC = () => {
        const heightM = height / 100
        setImc((weight / (heightM * heightM)).toFixed(2))
    }

    const verifyImc = () => {
        if (imc < 18.5) return "Abaixo do peso"
        if (imc < 24.9) return "Peso normal"
        if (imc < 29.9) return "Sobrepeso"
        if (imc < 34.9) return "Obesidade grau 1"
        if (imc < 39.9) return "Obesidade grau 3"
        return "Obesidade grau 3"
    }

    return (
        <div className={styles.calculator}>
            <Container maxWidth="sm">
                <Typography variant="h3">Calculadora</Typography>
                <Grid container direction="column" spacing="2">
                    <Grid item>
                        <TextField label="Altura em cm" variant="filled" fullWidth type="number" value={height} onChange={e => setHeight(e.target.value)} />
                    </Grid>
                    <Grid item>
                        <TextField label="Peso em kg" variant="filled" fullWidth type="number" value={weight} onChange={e => setWeight(e.target.value)} />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" fullWidth onClick={calculateIMC}>
                            Calcular
                        </Button>
                    </Grid>
                    {
                        imc && (
                            <Grid item>
                                <Typography>Seu IMC é: {imc} kg/m2 • {verifyImc()}</Typography>
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default Calculator