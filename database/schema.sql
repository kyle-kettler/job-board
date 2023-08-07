set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."jobs" (
	"jobId" serial NOT NULL,
	"title" TEXT NOT NULL,
	"description" TEXT NOT NULL,
	"companyName" TEXT NOT NULL,
	"companyImgUrl" TEXT NOT NULL,
	"salaryFloor" integer NOT NULL,
	"salaryCeiling" integer NOT NULL,
	"level" TEXT NOT NULL,
	"location" TEXT NOT NULL,
	"dateAdded" TIMESTAMP NOT NULL DEFAULT NOW(),
	"active" BOOLEAN NOT NULL,
	CONSTRAINT "jobs_pk" PRIMARY KEY ("jobId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."users" (
	"userId" serial NOT NULL,
	"username" TEXT NOT NULL,
	"hashedPassword" TEXT NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."applications" (
	"applicationId" serial NOT NULL,
	"jobId" integer NOT NULL,
	"userId" integer NOT NULL,
	"dateApplied" TIMESTAMP NOT NULL DEFAULT NOW(),
	"fullName" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"phone" TEXT NOT NULL,
	"resumeUrl" TEXT NOT NULL,
	"portfolioUrl" TEXT NOT NULL,
	"githubUrl" TEXT NOT NULL,
	"proudOfWork" TEXT NOT NULL,
	"interestingThing" TEXT NOT NULL,
	CONSTRAINT "applications_pk" PRIMARY KEY ("applicationId")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "applications" ADD CONSTRAINT "applications_fk0" FOREIGN KEY ("jobId") REFERENCES "jobs"("jobId");
ALTER TABLE "applications" ADD CONSTRAINT "applications_fk1" FOREIGN KEY ("userId") REFERENCES "users"("userId");
