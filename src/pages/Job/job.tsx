import React, { useState } from "react";

import { Pagination } from "react-custom-pagination";

// components
import { Header } from "../../component/Header/Header";
import { Input } from "../../component/Input/Input";
import { Button } from "../../component/Button/Button";

// api services
import { searchJobs } from "../../services/job-hunting.service";

// interfaces
import { JobDetailModel, SearchParam } from "../../interfaces/type";

// pages
import { JobDetails } from "./jobDetails";

export const Job: React.FC = () => {
  const [formData, setFormData] = useState<SearchParam | any>();
  const [jobs, setJobs] = useState<JobDetailModel[]>([]);
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const fetchJobs = async (event: any, params: SearchParam) => {
    event && event.preventDefault();
    setLoading(true);
    let response: any = await searchJobs(params);
    if (response.status === 200) {
      setLoading(false);
      setTotal(response.data.totalCount);
      setJobs(response.data.jobs);
      setErrorMessage("");
    } else {
      setLoading(false);
      setTotal(undefined);
      setJobs([]);
      setErrorMessage("Something went wrong , try again later");
    }
  };

  const paginate = async (number: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth'});
    formData.page = number;
    return fetchJobs(undefined, formData);
  };

  return (
    <div>
      <form className="form" data-testid="search-form" onSubmit={(event) => fetchJobs(event, formData)}>
        <label htmlFor="keyword"> Keywords:- </label>
        <Input
          data-testid="keywords"
          name="keywords"
          size={"medium"}
          onChange={onInputChange}
          placeholder={"I'm looking for vacancies"}
          required={true}
        ></Input>
        <label htmlFor="location"> Location:- </label>
        <Input
          data-testid="location"
          name="location"
          size={"medium"}
          onChange={onInputChange}
          placeholder={"in the region"}
        ></Input>
        <Button
          data-testid="search"
          primary={true}
          label={"Search"}
          size={"large"}
          direction={"left"}
        />
      </form>
      <div className="main">
        {loading && <div className="loader"></div>}

        {errorMessage && <p style={{ textAlign: "center", color: "red" }}> {errorMessage} </p>}

        {
          <p style={{ textAlign: "center", color: "#7f8b99" }}>
            {" "}
            Find your dream job by passing keywords and location :){" "}
          </p>
        }

        {total === 0 ? (
          <p style={{ textAlign: "center", color: "blue" }}>
            No job found for given keywords or location, try searching something
            else
          </p>
        ) : (
          <div>
            {jobs.map((job: JobDetailModel) => (
              <JobDetails
                key={job.id}
                jobItem={job}
                keywords={formData.keywords}
              />
            ))}
          </div>
        )}

        {jobs.length > 0 && (
          <Pagination
            totalPosts={total}
            postsPerPage={20}
            paginate={paginate}
          />
        )}
      </div>
    </div>
  );
};

export default Job;
