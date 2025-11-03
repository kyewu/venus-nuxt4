/**
 * @export
 * @interface Data
 * @description Data item structure
 * @param id {number} - Unique identifier
 * @param title {string} - Title of the data item
 * @param description {string} - Short description
 * @param content {string} - Detailed content
 */
export interface Data {
  id: number
  name?: string
  description?: string
  content?: string
}
