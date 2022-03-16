import React from "react";

import { Row, Container, Col } from "react-bootstrap";
import Link from "next/link";
import DashboardChart from "../DashboardChart";
import css from "./Dashboard.module.css";

const Dashboard = ({ link, waste, donations, consumption, total }) => {
  // let image = "../"

  return (
    <Container className={css.dashBox}>
      <Row className={css.row}>
        <div>User dashboard: analyse and monitor your food use:</div>
      </Row>

      <Row className={css.row}>
        <Link href={link}>
          <Col className={css.col} xs={{ span: 4 }}>
            <DashboardChart
              className={css.dashRight}
              value={waste}
              total={total}
              colour1="red"
            />
          </Col>
        </Link>
        <Link href={link}>
          <Col className={css.col} xs={{ span: 4 }}>
            <DashboardChart
              className={css.dashCentre}
              value={donations}
              total={total}
              colour1="#EF8D4B"
            />
          </Col>
        </Link>
        <Link href={link}>
          <Col className={css.col} xs={{ span: 4 }}>
            <DashboardChart
              className={css.dashLeft}
              value={consumption}
              total={total}
              colour1="#5CC971"
            />
          </Col>
        </Link>
      </Row>

      <Row className={css.row}>
        <Col xs={4}>
          <p className={css.label}>Wastage</p>
        </Col>
        <Col xs={4}>
          <p className={css.label}>Donations</p>
        </Col>
        <Col xs={4}>
          <p className={css.label}>Consumption</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
