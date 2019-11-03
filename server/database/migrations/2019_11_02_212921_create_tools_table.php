<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateToolsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tools', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('logo');
            $table->string('name', 35);
            $table->unsignedBigInteger('skill_id')->nullable();
            $table
                ->foreign('skill_id')
                ->references('id')
                ->on('skills')
                ->onDelete('set null');
            $table->string('type', 50);
            $table->text('description');
            $table->integer('rating')->nullable();
            $table->dateTime('created_at');
            $table->dateTime('updated_at');
        });

        Schema::create('user_tool', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id')->nullable();
            $table
                ->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
            $table->unsignedBigInteger('tool_id')->nullable();
            $table
                ->foreign('tool_id')
                ->references('id')
                ->on('tools')
                ->onDelete('cascade');
            $table->integer('note')->nullable();
            $table->dateTime('created_at');
            $table->dateTime('updated_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_tool');
        Schema::dropIfExists('tools');
    }
}
