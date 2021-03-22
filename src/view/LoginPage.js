import React from 'react';
import {Button, Card, Grid, TextField, Typography} from "@material-ui/core";
import logoVA from "../assets/image/va_color.png";

function LoginPage({errorHandler}){
    const [mail, setMail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (event) => {
        //TODO Handle validation
        event.preventDefault();
        errorHandler("L'implémentation est à faire !!!");
        return null;
    };
    const handleMailChange = (event) => setMail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);
    const handleValidation = () => {
        return mail.length > 0 && password.length > 0;
    };

    return(
        <div style={{textAlign: "center", width: '100%'}}>
            <Card style={{width: "50vw", marginLeft: "15vw", marginTop: "2vh", paddingTop: "0%"}}>
                <div style={{display: "flex", justifyContent: "center", margin: 20, padding: 20}}>
                    <br />
                    <Grid item xs={12} md={6} style={{ marginTop: "1vh" }}>
                        <img src={logoVA} alt={"Logo VA"} className="img-fluid" style={{ maxWidth: "20vw", maxHeight: "20vh" }} />
                        <br/>
                        <Typography component={"h6"} variant="h6">
                            Connectez-vous
                        </Typography>
                        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <TextField id="email" autoFocus label="Adresse mail" type="text" value={mail}
                                onChange={handleMailChange} placeholder="ex: emaurincome@asso-insa-lyon.fr"
                                margin="normal" style={{ width: "100%" }}
                            />
                            <br />
                            <TextField id="password" label="Mot de passe" type="password" value={password}
                                onChange={handlePasswordChange} margin="normal" style={{ width: "100%" }}
                            />
                            <br />
                            <Grid item xs={12} style={{ marginTop: "2vh" }}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item>
                                        <Button variant="contained" color="primary" type="submit" disabled={!handleValidation()}>
                                            Connexion
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </div>
            </Card>
        </div>
    );
}

export default LoginPage;