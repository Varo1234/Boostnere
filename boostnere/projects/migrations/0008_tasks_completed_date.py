# Generated by Django 4.2.5 on 2023-10-10 17:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0007_tasks_projects_tasks'),
    ]

    operations = [
        migrations.AddField(
            model_name='tasks',
            name='completed_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]
