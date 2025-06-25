export default class SaveTaskDto {
  id: null | number;

  name: string;
  description?: string;
  category: string;
  completed?: boolean;

  constructor(data: Partial<SaveTaskDto> = {}) {
    this.name = data.name || '';
    this.description = data.description;
    this.category = data.category;
    this.completed = data.completed || false;
  }
}
