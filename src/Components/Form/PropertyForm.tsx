import React from "react";
import { Field, Form, Formik } from "formik";
import { FormFields, PreparedForm } from "../../Types/FormTypes";
import {
  Button,
  CssBaseline,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { sendRegistrationForm, uploadFile } from "../../utils/requests";
import { ImageDrop } from "../ImageDrop";
import { convertImagesToFileNameArray } from "../../utils/imageConverter";

const initialValues: FormFields = {
  fullName: "",
  address: "",
  email: "",
  phoneNumber: "",
  price: 0,
  rooms: 1,
  description: "",
  imageFiles: [],
};

const PropertyForm = () => {
  return (
    <div style={{ padding: 16, margin: "auto", maxWidth: 600 }}>
      <CssBaseline />
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        Add Property
      </Typography>
      <Typography paragraph>
        {" "}
        Please Fill out this form to add your rental advertisement.{" "}
      </Typography>
      <Paper elevation={3} style={{ padding: 48 }}>
        <Formik
          initialValues={initialValues}
          onSubmit={(formData) => {
            let fileCount = 0;
            console.log("Pre formatted", formData);
            formData.imageFiles.forEach((image) => {
              uploadFile(formData.phoneNumber + "_" + ++fileCount, image);
            });
            const preparedForm: PreparedForm = {
              ...formData,
              imageFiles: fileCount,
            };
            console.log("Formatted Form", preparedForm);
            sendRegistrationForm(JSON.stringify(preparedForm));
            window.location.reload();
          }}
        >
          {({ values, handleSubmit, isSubmitting, setFieldValue }) => (
            <Form>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="fullName"
                    as={TextField}
                    label="Full Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="address"
                    as={TextField}
                    label="Address"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field fullWidth name="email" as={TextField} label="Email" />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    name="phoneNumber"
                    fullWidth
                    as={TextField}
                    label="Phone Number"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    fullWidth
                    name="price"
                    type="number"
                    as={TextField}
                    label="price"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    fullWidth
                    name="rooms"
                    label="Rooms"
                    type="number"
                    as={TextField}
                    select
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="description"
                    label="Description"
                    as={TextField}
                    multiline
                    rows={6}
                    rowsMax={10}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ImageDrop values={values} setFieldValue={setFieldValue} />
                </Grid>
                <Grid item style={{ marginTop: 24 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
    </div>
  );
};

export { PropertyForm };
