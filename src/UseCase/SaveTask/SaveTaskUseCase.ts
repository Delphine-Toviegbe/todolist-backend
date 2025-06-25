import { Injectable, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { Task } from '@prisma/client';
import { UseCase } from '../../index';
import SaveTaskDto from './SaveTaskDto';
import TaskRepository from '../../Repositories/TaskRepository';

@Injectable()
export default class SaveTaskUseCase implements UseCase<Promise<Task>, [dto: SaveTaskDto]> {
  constructor(private readonly taskRepository: TaskRepository) {}

  async handle(dto: SaveTaskDto): Promise<Task> {
    try {
      if (!dto.name?.trim()) {
        throw new BadRequestException('Task title is required');
      }

      if (dto.name.length > 255) {
        throw new BadRequestException('Task title is too long (max 255 characters)');
      }

      const taskData = {
        name: dto.name.trim(),
        description: dto.description?.trim() || null,
        category: dto.category,
        completed: dto.completed || false,
      };

      const savedTask = await this.taskRepository.save(taskData);

      return savedTask;

    } catch (error) {
      console.error('Error saving task:', error);

      if (error instanceof BadRequestException) throw error;

      throw new InternalServerErrorException('Failed to save task.');
    }
  }
}
