# Define build options
option(BUILD_MODULE1 "hello_world" OFF)
option(BUILD_MODULE2 "addition" ON) 

cmake_minimum_required(VERSION 3.10)  # Specify the minimum CMake version
project(HelloWorld LANGUAGES CXX)                  # Set the project name

# Set the C++ standard to C++11 or later
set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED ON)


# Add the executable target
if(BUILD_MODULE1)
    add_executable(hello_world test/hello_world.cpp)
endif()
if(BUILD_MODULE2)
    add_executable(int_sqrt test/hello_function.cpp)
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -O3 -s EXPORTED_FUNCTIONS=_int_sqrt -s EXPORTED_RUNTIME_METHODS=ccall,cwrap")
endif()
