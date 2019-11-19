import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Button, Typography, Paper } from "@material-ui/core";
import { Page1 } from "../../page1";
import { Page2 } from "../../page2";
import { Page3 } from "../../page3";
import { useFormStyles } from "./form.styles";

const pages = [<Page1 />, <Page2 />, <Page3 />];

const getPageContent = page => {
  switch (page) {
    case 0:
      return <Page1 />;
    case 1:
      return <Page2 />;
    case 2:
      return <Page3 />;
    default:
      throw new Error("Unknown step");
  }
};

const FormWizard = () => {
  const [activePage, setActivePage] = useState(0);
  const classes = useFormStyles();

  const handleNext = () => {
    setActivePage(activePage + 1);
  };

  const handleBack = () => {
    setActivePage(activePage - 1);
  };

  const isLastPage = activePage === pages.length - 1;

  return (
    <div>
      <Formik
        initialValues={{ firstName: "Blake", lastName: "Billy", price: "10" }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          console.log("submit:", data);
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <main className={classes.layout}>
              <Paper className={classes.paper}>
                <React.Fragment>
                  {activePage === pages.length ? (
                    <React.Fragment>
                      <Typography variant="h5" gutterBottom>
                        Thank you for your order.
                      </Typography>
                      <Typography variant="subtitle1">
                        Your order number is #2001539. We have emailed your
                        order confirmation, and will send you an update when
                        your order has shipped.
                      </Typography>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      {getPageContent(activePage)}
                      <div className="classes.buttons">
                        {activePage !== 0 && (
                          <Button
                            className={classes.button}
                            onClick={handleBack}
                          >
                            Back
                          </Button>
                        )}
                        {!isLastPage && (
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}
                          >
                            Next
                          </Button>
                        )}
                        {isLastPage && (
                          <Button
                            type="submit"
                            variant="contained"
                            disabled={isSubmitting}
                            color="primary"
                            className={classes.button}
                          >
                            Submit
                          </Button>
                        )}
                      </div>
                    </React.Fragment>
                  )}
                </React.Fragment>
                <pre>{JSON.stringify(values, null, 2)}</pre>
              </Paper>
            </main>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormWizard;
