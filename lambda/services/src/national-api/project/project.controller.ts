import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Project } from '../../shared/entities/project.entity';
import { Action } from '../../shared/casl/action.enum';
import { AppAbility } from '../../shared/casl/casl-ability.factory';
import { CheckPolicies } from '../../shared/casl/policy.decorator';
import { PoliciesGuard } from '../../shared/casl/policy.guard';
import { ProjectDto } from '../../shared/dto/project.dto';
import { ProjectService } from './project.service';
import { ApiKeyJwtAuthGuard } from '../auth/guards/api-jwt-key.guard';

@ApiTags('Project')
@ApiBearerAuth('api_key')
@ApiBearerAuth()
@Controller('project')
export class ProjectController {

    constructor(private projectService: ProjectService) {

    }

    @ApiBearerAuth('api_key')
    @ApiBearerAuth()
    @UseGuards(ApiKeyJwtAuthGuard, PoliciesGuard)
    @CheckPolicies((ability: AppAbility) => ability.can(Action.Create, Project))
    @Post('add')
    addProject(@Body()project: ProjectDto) {
      return this.projectService.create(project)
    }
}