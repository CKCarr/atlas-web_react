import { schema, normalize } from "normalizr";

// Define course schema
// Define the schema for courses
const course = new schema.Entity(
  "courses",
  {},
  {
    processStrategy: (value) => ({ ...value, isSelected: false }),
  }
);

// Create coursesNormalizer function
export const coursesNormalizer = (data) => {
  const normalizedData = normalize(data, [course]);
  return normalizedData.entities.courses || {};
};
