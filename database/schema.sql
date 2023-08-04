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



CREATE TABLE "public"."saved" (
	"savedId" serial NOT NULL,
	"jobId" integer NOT NULL,
	"userId" integer NOT NULL,
	CONSTRAINT "saved_pk" PRIMARY KEY ("savedId")
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



CREATE TABLE "public"."applied" (
	"appliedId" serial NOT NULL,
	"jobId" integer NOT NULL,
	"userId" integer NOT NULL,
	"dateApplied" TIMESTAMP NOT NULL DEFAULT NOW(),
	CONSTRAINT "applied_pk" PRIMARY KEY ("appliedId")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "saved" ADD CONSTRAINT "saved_fk0" FOREIGN KEY ("jobId") REFERENCES "jobs"("jobId");
ALTER TABLE "saved" ADD CONSTRAINT "saved_fk1" FOREIGN KEY ("userId") REFERENCES "users"("userId");


ALTER TABLE "applied" ADD CONSTRAINT "applied_fk0" FOREIGN KEY ("jobId") REFERENCES "jobs"("jobId");
ALTER TABLE "applied" ADD CONSTRAINT "applied_fk1" FOREIGN KEY ("userId") REFERENCES "users"("userId");
